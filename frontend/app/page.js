"use client"

// import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Navbar /> */}
      <Hero />
      <div className="flex justify-between">
        <img className="h-200 w-200 mt-15 pt-10 mr-4" alt="img" src="https://5.imimg.com/data5/JR/KI/QI/SELLER-7817265/student-management-system-500x500.jpg" />
        <img className="mt-15" alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnaqVAP1k6KFUHNDZsJFLqibUFIkmj7lkeQ&s" />

      </div>
      {/* <Footer /> */}
    </main>
  );
}
