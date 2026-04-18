"use client";
import { useState, useEffect } from "react";
import { auth, db } from "@/app/utils/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, onSnapshot, addDoc, serverTimestamp, orderBy } from "firebase/firestore";

export default function AdminChat() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Logic to distinguish admin from anonymous guest
      if (user && !user.isAnonymous) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Invalid Admin Credentials");
    }
  };

  const handleLogout = () => signOut(auth);

  // Data fetching logic - Updated to ensure real-time tracking of chat IDs
  useEffect(() => {
    if (!isAdmin) return;
    
    // Listening to the 'chats' collection
    const unsub = onSnapshot(collection(db, "chats"), (snap) => {
      const activeChats = snap.docs.map(doc => doc.id);
      console.log("Admin side detected chat IDs:", activeChats);
      setChats(activeChats);
    });
    
    return () => unsub();
  }, [isAdmin]);

  useEffect(() => {
    if (!selectedChat || !isAdmin) return;
    const q = query(collection(db, "chats", selectedChat, "messages"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => setMessages(snap.docs.map(doc => doc.data())));
    return () => unsub();
  }, [selectedChat, isAdmin]);

  const sendReply = async (e) => {
    e.preventDefault();
    if (!reply.trim()) return;
    await addDoc(collection(db, "chats", selectedChat, "messages"), {
      text: reply,
      sender: "admin",
      createdAt: serverTimestamp(),
    });
    setReply("");
  };

  // --- LOGIN UI (Styles Preserved) ---
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0C2C55]">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl w-96">
          <h2 className="text-2xl font-bold mb-6 text-[#0C2C55] text-center">Admin Access</h2>
          <input 
            type="email" placeholder="Email" className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-[#2E8A99]"
            onChange={(e) => setEmail(e.target.value)} required
          />
          <input 
            type="password" placeholder="Password" className="w-full border p-3 rounded-lg mb-6 outline-none focus:border-[#2E8A99]"
            onChange={(e) => setPassword(e.target.value)} required
          />
          <button type="submit" className="w-full bg-[#2E8A99] text-white p-3 rounded-lg font-bold hover:bg-[#256f7a] transition-colors">
            Login to Dashboard
          </button>
        </form>
      </div>
    );
  }

  // --- CHAT DASHBOARD UI (Styles Preserved) ---
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <div className="w-1/4 bg-white border-r overflow-y-auto">
        <div className="md:p-4  p-2 bg-[#0C2C55] text-white font-bold  md:flex justify-between items-center">
          <span> Enquiries</span>
          <button onClick={handleLogout} className="text-xs underline opacity-80">Logout</button>
        </div>
        {chats.length === 0 && <p className="p-4 text-gray-400 text-sm">No active chats yet.</p>}
        {chats.map(id => (
          <div key={id} onClick={() => setSelectedChat(id)} className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedChat === id ? "bg-teal-50 border-l-4 border-teal-500" : ""}`}>
            <p className="font-bold text-xs text-gray-500 mb-1 uppercase tracking-wider">Guest ID</p>
            <p className="text-sm truncate">{id}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 bg-white border-b font-bold flex justify-between items-center">
              <span>Current Session: {selectedChat.slice(0, 8)}</span>
              <span className="text-green-500 text-xs flex items-center gap-1">● Live</span>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8fafc]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.sender === "admin" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-xl max-w-md shadow-sm ${m.sender === "admin" ? "bg-[#0C2C55] text-white rounded-tr-none" : "bg-white border text-gray-800 rounded-tl-none"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendReply} className="p-4 bg-white border-t flex gap-2 shadow-inner">
              <input value={reply} onChange={(e) => setReply(e.target.value)} className="flex-1 border p-3 rounded-xl outline-none focus:border-[#2E8A99]" placeholder="Type response..." />
              <button className="bg-[#2E8A99] text-white px-8 py-3 rounded-xl font-bold shadow-md">Send</button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <div className="text-6xl mb-4 opacity-20">💬</div>
            <p>Select a guest message from the sidebar to reply</p>
          </div>
        )}
      </div>
    </div>
  );
}