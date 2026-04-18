"use client";
import { useState, useEffect, useRef } from "react";
import { auth, db } from "@/app/utils/firebase";
// Added onAuthStateChanged for persistence
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, setDoc } from "firebase/firestore";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef();

  // Handle Authentication Persistence
// Handle Authentication Persistence
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        try {
          const cred = await signInAnonymously(auth);
          setUser(cred.user);
        } catch (err) {
          console.error("Auth Error:", err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Sync Messages from Firestore
  useEffect(() => {
    // REMOVED !isOpen here so it fetches messages in the background 
    // even before the user clicks the chat bubble
    if (!user) return; 

    const q = query(collection(db, "chats", user.uid, "messages"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const fetchedMessages = snap.docs.map(doc => doc.data());
      setMessages(fetchedMessages);
      
      if (isOpen) {
        setTimeout(() => scrollRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    });
    
    return () => unsub();
  }, [user, isOpen]); // Now it stays in sync

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!user || !input.trim()) return;

    try {
      const guestMessage = input;
      setInput(""); // Clear input immediately for better UX

      // 1. Ensure the parent document exists so Admin can see the chat
      await setDoc(doc(db, "chats", user.uid), {
        lastMessage: guestMessage,
        updatedAt: serverTimestamp(),
        status: "active"
      }, { merge: true });

      // 2. Add the message to the sub-collection
      await addDoc(collection(db, "chats", user.uid, "messages"), {
        text: guestMessage,
        sender: "guest",
        createdAt: serverTimestamp(),
      });
      
    } catch (error) {
      console.error("Send Error:", error);
    }
  };

  return (
    <div className="fixed bottom-1 right-2 z-[1000] font-sans">
      {isOpen ? (
        <div className="w-[320px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          <div className="bg-[#0C2C55] p-4 text-white flex justify-between items-center">
            <span className="font-bold">Chat with Synora</span>
            <button onClick={() => setIsOpen(false)}><FaTimes /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === "guest" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  m.sender === "guest" 
                    ? "bg-[#2E8A99] text-white rounded-tr-none" 
                    : "bg-white border text-gray-800 rounded-tl-none"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          <form onSubmit={sendMessage} className="p-3 border-t flex gap-2">
            <input 
              disabled={!user}
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder={user ? "Type a message..." : "Connecting..."} 
              className="flex-1 text-sm outline-none border rounded-lg px-3 py-2 focus:border-[#2E8A99] disabled:bg-gray-100" 
            />
            <button 
              disabled={!user || !input.trim()}
              type="submit" 
              className="bg-[#2E8A99] text-white p-2 rounded-lg disabled:opacity-50 transition-opacity"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-[#0C2C55] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <FaComments size={24} />
        </button>
      )}
    </div>
  );
}