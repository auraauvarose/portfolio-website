import React, { useRef, useState } from 'react';
import Section from './Section';
import { EmailIcon, GitHubIcon } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykSung6504H7TmPc_pDGroyRUXNuP3twnTC5Y4VZaaKERcMyIsZJJdAGvQ1DR6OBDzNg/exec"; // Ganti dengan URL Web App kamu

interface ContactSectionProps {
  id: string;
  email: string;
  linkedIn: string;
  github: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, email, linkedIn, github }) => {
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const isParaVisible = useIntersectionObserver(paraRef, { threshold: 0.5 });

  // State untuk form pesan
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: new FormData(form), // TANPA headers
      });
      setSent(true);
      alert("Pesan berhasil dikirim!");
      form.reset();
    } catch (err) {
      alert("Gagal mengirim pesan!");
    }
    setLoading(false);
  };

  return (
    <Section id={id} title="Hubungi Saya" className="bg-primary dark:bg-primary-dark transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"> {/* Ubah max-w-xl jadi max-w-3xl */}
        <div className="max-w-xl mx-auto text-center">
          <p 
            ref={paraRef}
            className={`text-lg text-text-secondary dark:text-text-secondary-dark mb-8 transition-all duration-500 ease-out ${isParaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-3'}`}
          >
            Aku sangat senang mendengar darimu! Jika kamu memiliki pertanyaan, ingin berkolaborasi, atau hanya ingin menyapa, jangan ragu untuk menghubungiku melalui email atau media sosial di bawah ini.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl space-y-6"
        >
          <h3 className="text-xl font-semibold text-accent dark:text-accent-dark mb-4 text-center">Kirim Pesan</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 text-accent dark:text-accent-dark" htmlFor="name">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Nama kamu"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-accent dark:text-accent-dark" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="email@domain.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-accent dark:text-accent-dark" htmlFor="message">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Tulis pesan kamu di sini..."
            />
          </div>
          <button
            type="submit"
            disabled={loading || sent}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {loading ? "Mengirim..." : sent ? "Terkirim!" : "Kirim Pesan"}
          </button>
          {sent && (
            <p className="text-green-600 text-center mt-2">Pesan kamu sudah terkirim. Terima kasih!</p>
          )}
        </form>

        {/* Link Kontak */}
        <div className="space-y-4 mt-8">
          <h4 className="text-2xl font-bold text-accent dark:text-accent-dark mb-4 text-center">
            Atau hubungi langsung:
          </h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark text-lg font-medium transition-all duration-300"
            >
              <EmailIcon className="w-5 h-5" /> {email}
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark text-lg font-medium transition-all duration-300"
            >
              <GitHubIcon className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;