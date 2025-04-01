// pages/privacy-policy.tsx
import Head from 'next/head';

const APP_NAME = "EasySabil"; // Ganti dengan nama resmi di Play Store
const DEVELOPER_NAME = "Candra Sidik Dermawan"; // Sesuai akun Google Play Console
const CONTACT_EMAIL = "projectcsd07@gmail.com"; // Email publik yang terdaftar
const WEBSITE_URL = "https://csdevop.vercel.app"; // Domain resmi
const ADDRESS = "Depok, Kelapa Dua"; // Alamat

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Kebijakan Privasi - {APP_NAME}</title>
        <meta name="description" content={`Kebijakan Privasi resmi ${APP_NAME}`} />
      </Head>

      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Kebijakan Privasi {APP_NAME}
          </h1>
          <p className="text-gray-600">
            Diterbitkan oleh: {DEVELOPER_NAME}
          </p>
        </div>

        {/* Bagian Legal */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="font-semibold text-lg mb-3">Informasi Pengembang</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nama Resmi: {DEVELOPER_NAME}</li>
            <li>Alamat: {ADDRESS}</li>
            <li>Kontak: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600">{CONTACT_EMAIL}</a></li>
            <li>Website Resmi: <a href={WEBSITE_URL} className="text-blue-600">{WEBSITE_URL}</a></li>
          </ul>
        </div>

        {/* Isi Kebijakan */}
        <Section title="1. Data yang Dikumpulkan">
          <p>
            {APP_NAME} yang dikembangkan oleh {DEVELOPER_NAME} dapat mengumpulkan:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Data registrasi (nama, email)</li>
            <li>Data penggunaan (log sistem, interaksi aplikasi)</li>
            <li>Data perangkat (model, OS, ID unik)</li>
          </ul>
        </Section>

        <Section title="2. Tujuan Pengolahan Data">
          <p>
            Data digunakan untuk:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Menyediakan layanan inti {APP_NAME}</li>
            <li>Peningkatan fitur aplikasi</li>
            <li>Kepatuhan hukum yang berlaku</li>
          </ul>
        </Section>

        <Section title="3. Pembagian Data">
          <p>
            {DEVELOPER_NAME} dapat membagikan data dengan:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Penyedia layanan pihak ketiga (contoh: Firebase, Google Analytics)</li>
            <li>Otoritas hukum yang berwenang</li>
            <li>Partner bisnis dengan persetujuan tertulis</li>
          </ul>
        </Section>

        {/* ... (bagian lainnya) ... */}

        <Section title="7. Kontak">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Perwakilan Resmi</h3>
            <p>
              Untuk pertanyaan terkait privasi, hubungi:<br/>
              <strong>{DEVELOPER_NAME}</strong><br/>
              Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600">{CONTACT_EMAIL}</a><br/>
              Alamat: {ADDRESS}
            </p>
          </div>
        </Section>

        {/* Footer Legal */}
        <div className="mt-12 text-sm text-gray-500 border-t pt-6">
          <p>
            Dokumen ini mengikat secara hukum dan berlaku untuk penggunaan {APP_NAME} 
            yang diterbitkan oleh {DEVELOPER_NAME} di Google Play Store.
          </p>
        </div>
      </div>
    </>
  );
};

// Reusable Section Component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {children}
  </section>
);

export default PrivacyPolicy;