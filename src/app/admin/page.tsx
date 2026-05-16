"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as XLSX from "xlsx";

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(dateString));
};

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string | null;
  message: string | null;
  createdAt: string;
}

export default function AdminPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("/api/admin/enquiries");
      const json = await res.json();
      if (json.ok) {
        setEnquiries(json.data);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;
    
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.ok) {
        setEnquiries((prev) => prev.filter((e) => e._id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error("Delete error", err);
      alert("Error deleting inquiry");
    } finally {
      setDeletingId(null);
    }
  };

  const exportToExcel = () => {
    const dataToExport = enquiries.map((e) => ({
      Date: formatDate(e.createdAt),
      Name: e.name,
      Email: e.email,
      Phone: e.phone || "—",
      Company: e.company || "—",
      Subject: e.subject || "—",
      Message: e.message || "—",
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");
    XLSX.writeFile(workbook, `Inquiries_${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-32 pb-20 px-6 md:px-10 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-px w-8 bg-[#0B3A5C]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#0B3A5C] font-bold">
              Admin Portal
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-[#0B3A5C] text-5xl md:text-6xl tracking-tight"
            >
              Inquiries <span className="italic opacity-50">Collection</span>
            </motion.h1>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={exportToExcel}
              disabled={enquiries.length === 0}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3A5C] text-white rounded-xl text-[11px] uppercase tracking-widest font-bold hover:bg-[#1F8FCF] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Export to Excel
            </motion.button>
          </div>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-40">
            <div className="w-12 h-12 border-t-2 border-[#1F8FCF] rounded-full animate-spin" />
          </div>
        ) : enquiries.length === 0 ? (
          <div className="bg-white/50 border border-[#0B3A5C]/10 rounded-2xl p-20 text-center">
            <p className="text-[#0B3A5C]/40 text-lg">No inquiries found yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-[#0B3A5C]/10 bg-white/50 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B3A5C]/5 border-b border-[#0B3A5C]/10">
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest text-[#0B3A5C]/60 font-bold">Date</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest text-[#0B3A5C]/60 font-bold">Name</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest text-[#0B3A5C]/60 font-bold">Contact Info</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest text-[#0B3A5C]/60 font-bold">Message</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest text-[#0B3A5C]/60 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="popLayout">
                  {enquiries.map((enquiry) => (
                    <motion.tr
                      key={enquiry._id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="group border-b border-[#0B3A5C]/5 hover:bg-white transition-colors"
                    >
                      <td className="px-8 py-6 text-sm text-[#0B3A5C]/60 whitespace-nowrap">
                        {formatDate(enquiry.createdAt)}
                      </td>
                      <td className="px-8 py-6 font-medium text-[#0B3A5C]">{enquiry.name}</td>
                      <td className="px-8 py-6 text-sm leading-relaxed">
                        <div className="text-[#0B3A5C]">{enquiry.email}</div>
                        {enquiry.phone && <div className="text-[#0B3A5C]/50 mt-1">{enquiry.phone}</div>}
                        {enquiry.company && <div className="text-[#0B3A5C]/50 mt-0.5">{enquiry.company}</div>}
                        {enquiry.subject && (
                          <div className="mt-2 inline-block px-2 py-0.5 bg-[#1F8FCF]/10 text-[#1F8FCF] text-[10px] uppercase tracking-wider font-bold rounded">
                            {enquiry.subject}
                          </div>
                        )}
                      </td>
                      <td className="px-8 py-6 text-sm text-[#0B3A5C]/70 max-w-md">
                        <p className="line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {enquiry.message || "—"}
                        </p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button
                          onClick={() => handleDelete(enquiry._id)}
                          disabled={deletingId === enquiry._id}
                          className="text-[11px] uppercase tracking-widest font-bold text-red-500/60 hover:text-red-500 transition-colors disabled:opacity-30"
                        >
                          {deletingId === enquiry._id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        ) as any}
      </div>
    </div>
  );
}
