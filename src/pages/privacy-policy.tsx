// pages/privacy-policy.tsx
import Head from 'next/head';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kebijakan Privasi - [Nama Aplikasi]</title>
        <meta name="description" content="Kebijakan Privasi resmi [Nama Aplikasi]" />
        <link rel="canonical" href="https://your-domain.vercel.app/privacy-policy" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Kebijakan Privasi
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>

        <Section title="1. Informasi yang Kami Kumpulkan">
          <ul className="list-disc pl-6 space-y-2">
            {/* <li>
                            <strong>Data Pribadi:</strong> Nama, alamat email, dan informasi akun
                            (jika diperlukan untuk registrasi)
                        </li>
                        <li>
                            <strong>Data Penggunaan:</strong> Log sistem (alamat IP, jenis perangkat,
                            versi OS)
                        </li> */}
            <li>
              <strong>Data Penyimpanan:</strong> Akses terbatas untuk kebutuhan fungsional
              aplikasi
            </li>
          </ul>
        </Section>

        <Section title="2. Penggunaan Data">
          <p className="mb-2">Data digunakan untuk tujuan:</p>
          <ul className="list-disc pl-6 space-y-2">
            {[
              'Menyediakan layanan aplikasi',
              'Peningkatan kualitas produk',
              'Analisis penggunaan',
              'Kepatuhan hukum',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="3. Pembagian Data">
          <p>
            Kami <strong>tidak menjual</strong> atau membagikan data Anda kecuali:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Dengan persetujuan eksplisit pengguna</li>
            <li>Untuk memenuhi kewajiban hukum</li>
            <li>Integrasi dengan penyedia layanan pihak ketiga</li>
          </ul>
        </Section>

        <Section title="4. Keamanan Data">
          <p>
            Mengimplementasikan langkah-langkah keamanan teknis termasuk enkripsi dan
            akses terbatas. Namun, tidak ada sistem yang sepenuhnya kebal dari risiko
            keamanan.
          </p>
        </Section>

        <Section title="5. Hak Pengguna">
          <div className="space-y-2">
            <p>Anda berhak untuk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mengakses data pribadi Anda</li>
              <li>Meminta pembaruan atau penghapusan data</li>
              <li>Menarik persetujuan pengumpulan data</li>
            </ul>
            <p>
              Hubungi kami di:{' '}
              <a
                href="mailto:projectcsd07@gmail.com"
                className="text-blue-600 hover:underline"
              >
                projectcsd07@gmail.com
              </a>
            </p>
          </div>
        </Section>

        <Section title="6. Perubahan Kebijakan">
          <p>
            Perubahan akan diinformasikan melalui:{' '}
            <strong>pembaruan aplikasi atau notifikasi email</strong>. Penggunaan
            berkelanjutan setelah perubahan dianggap sebagai penerimaan.
          </p>
        </Section>
      </main>
    </>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-1">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

export default PrivacyPolicy;