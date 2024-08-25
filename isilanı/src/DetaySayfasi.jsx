// components/DetaySayfasi.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const is_ilanlari_veriler = [
    {
    id:1,
        job_title: "Tam Yığın Geliştirici",
        job_description: "Ön uç ve arka uç geliştirmede deneyimli bir Tam Yığın Geliştirici arıyoruz. İdeal aday, ön uç web mimarisini geliştirmek ve tasarlamak, uygulamaların duyarlılığını sağlamak ve web tasarım özellikleri için grafik tasarımcılarla birlikte çalışmakla sorumlu olacaktır. Ayrıca, bir projeyi başlangıçtan nihai ürüne kadar takip etmek gerekeceğinden iyi organizasyon becerilerine ve ayrıntılara dikkat etmeye ihtiyaç vardır.",
        job_image_url: "images/job_image.jpg",
        location: "İstanbul, Türkiye",
        category: "Yazılım Geliştirme",
        Image:"public/images/job_image.jpg"
      },
      {
        id:2,
        job_title: "Mobil Uygulama Geliştirici",
        job_description: "Android ve iOS platformlarında mobil uygulamalar geliştirme konusunda deneyimli bir geliştirici arıyoruz. Aday, kullanıcı dostu ve işlevsel mobil uygulamalar yaratma konusunda yetenekli olmalıdır.",
        job_image_url: "images/job_image.jpg",
        location: "Ankara, Türkiye",
        category: "Mobil Geliştirme"
      },
      {
        id:3,
        job_title: "Veri Bilimcisi",
        job_description: "Büyük veri analizi ve makine öğrenimi konularında uzmanlaşmış bir Veri Bilimcisi arıyoruz. Aday, veri toplama, işleme ve analiz süreçlerinde deneyimli olmalıdır.",
        job_image_url: "images/job_image.jpg",
        location: "İzmir, Türkiye",
        category: "Veri Bilimi"
      },
      {id:4,
        job_title: "Siber Güvenlik Uzmanı",
        job_description: "Şirketimizin dijital güvenliğini sağlamak için siber güvenlik stratejileri geliştirecek ve uygulayacak bir uzman arıyoruz. Aday, siber tehditlere karşı önlemler almak ve güvenlik açıklarını belirlemekle sorumlu olacaktır.",
        job_image_url: "images/job_image.jpg",
        location: "Bursa, Türkiye",
        category: "Siber Güvenlik"
      },
      {
        id:5,
        job_title: "Bulut Mimarisi Uzmanı",
        job_description: "Bulut bilişim çözümleri tasarlama ve uygulama konusunda deneyimli bir Bulut Mimarisi Uzmanı arıyoruz. Aday, şirketimizin bulut altyapısını yönetmek ve optimize etmekle sorumlu olacaktır.",
        job_image_url: "images/job_image.jpg",
        location: "Antalya, Türkiye",
        category: "Bulut Bilişim"
      },
      {
        id:6,
        job_title: "Yapay Zeka Mühendisi",
        job_description: "Yapay zeka ve makine öğrenimi algoritmaları geliştirme konusunda deneyimli bir mühendis arıyoruz. Aday, AI projelerini baştan sona yönetme ve optimize etme konusunda yetenekli olmalıdır.",
        job_image_url: "images/job_image.jpg",
        location: "Adana, Türkiye",
        category: "Yapay Zeka"
      },
      {
        id:7,
        job_title: "Web Geliştirici",
        job_description: "Modern web teknolojileri ve framework'leri konusunda deneyimli bir Web Geliştirici arıyoruz. Aday, kullanıcı dostu ve etkileşimli web uygulamaları geliştirmekle sorumlu olacaktır.",
        job_image_url: "images/job_image.jpg",
        location: "Gaziantep, Türkiye",
        category: "Web Geliştirme"
      },
      {
        id:8,
        job_title: "UI/UX Tasarımcısı",
        job_description: "Kullanıcı arayüzü ve kullanıcı deneyimi tasarımı konusunda yetenekli bir tasarımcı arıyoruz. Aday, kullanıcı dostu ve estetik açıdan hoş tasarımlar yaratmakla sorumlu olacaktır.",
        job_image_url: "images/job_image.jpg",
        location: "Konya, Türkiye",
      category: "Tasarım"
      },
      {
        id:9,
        job_title: "Proje Yöneticisi",
        job_description: "Teknoloji projelerini yönetme ve ekipleri koordine etme konusunda deneyimli bir Proje Yöneticisi arıyoruz. Aday, projelerin zamanında ve bütçe dahilinde tamamlanmasını sağlamakla sorumlu olacaktır.",
        job_image_url: "images/job_image.jpg",
        location: "Kayseri, Türkiye",
        category: "Proje Yönetimi"
      },
      {
        id:10,
        job_title: "DevOps Mühendisi",
        job_description: "Yazılım geliştirme ve operasyon süreçlerini otomatikleştirme konusunda deneyimli bir DevOps Mühendisi arıyoruz. Aday, sürekli entegrasyon ve sürekli teslimat (CI/CD) süreçlerini optimize etmekle sorumlu olacaktır.",
        job_image_url: "images/job_image.jpg",
        location: "Samsun, Türkiye",
        category: "DevOps"
      }
];

const DetaySayfasi = () => {
  const { ilanId } = useParams();
  const ilan = is_ilanlari_veriler.find(ilan => ilan.id === parseInt(ilanId, 10));

  if (!ilan) return <div>İlan bulunamadı!</div>;

  return (
    <div className='detay-sayfasi'>
      <h1>{ilan.job_title}</h1>
      <img src={ilan.job_image_url} alt={ilan.job_title} />
      <p>{ilan.job_description}</p>
      <p>Konum: {ilan.location}</p>
      <p>Kategori: {ilan.category}</p>
    </div>
  );
};

export default DetaySayfasi;
