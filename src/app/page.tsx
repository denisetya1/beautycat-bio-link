import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

const page = () => {
  const links = [
    {
      title: "Shopee 1",
      url: "https://shopee.co.id/beautycat_id",
      image: "/shopee-logo.png"
    },
    {
      title: "Shopee 2",
      url: "https://shopee.co.id/skincarebycat",
      image: "/shopee-logo.png"
    },
    // {
    //   title: "Shopee",
    //   url: "https://shp.ee/2nheyv5",
    //   image: "/shopee-logo.png"
    // },
    {
      title: "Lazada 1",
      url: "https://s.lazada.co.id/s.NvjMT",
      image: "/lazada-logo.png"
    },
    {
      title: "Lazada 2",
      url: "https://s.lazada.co.id/s.NvjLs",
      image: "/lazada-logo.png"
    },
    {
      title: "Tokopedia",
      url: "https://tokopedia.link/LzXHNb2ttEb",
      image: "/tokopedia-logo.png"
    },
    {
      title: "BliBli",
      url: "https://blibli.app.link/YgjgeC4ttEb",
      image: "/blibli-logo.png"
    },
  ]

  const contacts = [
    {
      title: "Admin 1",
      url: "https://wa.me/+6285179587790",
      image: "/whatsapp-logo.png"
    },
    {
      title: "Admin 2",
      url: "https://wa.me/+6285175457581",
      image: "/whatsapp-logo.png"
    },
    {
      title: "Admin Toko",
      url: "https://wa.me/+6285179699077",
      image: "/whatsapp-logo.png"
    },
    {
      title: "Penawaran Kerjasama",
      url: "https://wa.me/+6285643191350",
      image: "/whatsapp-logo.png"
    }
  ]

  return (
    <div className="relative flex w-full h-full flex-col md:flex-row gap-5">
      <div className='fixed w-full h-full z-0 overflow-hidden'>
        <img src="/bg.png" className="fixed top-[0%] left-[-2%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[21%] right-[37%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[7%] right-[50%] w-[90px]" />
        <img src="/bg.png" className="fixed hidden md:block top-[10%] right-[70%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[40%] right-[41%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[70%] right-[80%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[83%] right-[10%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[90%] right-[90%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[55%] right-[9%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[15%] right-[95%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[22%] right-[21%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[8%] right-[8%] w-[90px]" />
        <img src="/bg.png" className="fixed top-[25%] right-[2%] w-[90px]" />
      </div>
      <div className="w-full md:w-1/3 z-10 p-4 px-6 header flex flex-row justify-center items-center gap-5">
        <div className='flex flex-col'>
          <div className='flex relative m-auto justify-center items-center p-1 md:p-3 w-[130px] h-[130px] md:w-[270px] md:h-[270px] bg-white rounded-full shadow-xl'>
            <div className='w-full h-full border-[2px] md:border-[5px] border-[#5E005E] rounded-full p-3 md:p-6'>
              <img
                src="/logo-beautycat-qos.png"
                alt="Beautycat - Queen of Skincare"
                className='w-full h-full object-contain'
              />
            </div>
          </div>

          <div className='hidden md:block mt-10 mb-5 text-center'>
            <div className='w-[70%] m-auto bg-violet-800 pb-[4px] rounded-xl'>
              <div className='w-full m-auto bg-white p-[2px] py-4 rounded-xl'>
                <h2 className='text-xl text-black mb-3'>Store Location</h2>
                <div className='flex flex-col justify-center items-center text-center px-4'>
                  <a href="https://maps.app.goo.gl/hHvGG1GdmmeYAHXF6" target='_blank' className='text-black text-center'>
                    <GrMapLocation size={50} />
                  </a>
                  <div className='w-full text-center text-black'>
                    Jl. Kabut No. 94, Panggung, Jebres, Kec. Jebres, Surakarta
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full md:w-1/3 z-10">
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
          <div className='w-full flex flex-col justify-items-center items-center gap-4'>
            {links.map((item, idx) => <div key={idx}
              className='m-auto block bg-violet-800 pb-[5px] rounded-full w-[70%] shadow-md'
            >
              <a href={item.url}
                className='flex flex-row h-full px-[4px] py-[2px] justify-between items-center bg-white rounded-full'
                target='_blank'
              >
                <div className='relative h-full w-[50px] rounded-full overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.image}
                    className='h-full w-auto rounded-full'
                    fill
                    objectFit='contain'
                    loading="lazy"
                  />
                </div>
                <div className='grow py-4 pr-6 text-center'>{item.title}</div>
              </a>
            </div>)}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 z-10">
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
          <h2 className='text-xl text-white mt-10 mb-3'>Contact Us</h2>
          <div className='w-full flex flex-col justify-items-center items-center gap-4'>
            {contacts.map((item, idx) => <div key={idx}
              className='m-auto block bg-violet-800 pb-[5px] rounded-full w-[70%]'
            >
              <a href={item.url}
                className='flex flex-row h-full px-[4px] py-[2px] justify-between items-center bg-white rounded-full'
                target='_blank'
              >
                <div className='relative h-full w-[50px] rounded-full'>
                  <Image
                    src={item.image}
                    alt={item.image}
                    className='h-full w-auto'
                    fill
                    objectFit='contain'
                    loading="lazy"
                  />
                </div>
                <div className='grow py-4 pr-6 text-center'>{item.title}</div>
              </a>
            </div>)}
          </div>

          <div className='md:hidden mt-10 mb-5 text-center'>
            <div className='w-[70%] m-auto bg-violet-800 pb-[4px] rounded-xl'>
              <div className='w-full m-auto bg-white p-[2px] py-4 rounded-xl'>
                <h2 className='text-xl text-black mb-3'>Store Location</h2>
                <div className='flex flex-col justify-center items-center text-center px-4'>
                  <a href="https://maps.app.goo.gl/hHvGG1GdmmeYAHXF6" target='_blank' className='text-black text-center'>
                    <GrMapLocation size={50} />
                  </a>
                  <div className='w-full text-center text-black'>
                    Jl. Kabut No. 94, Panggung, Jebres, Kec. Jebres, Surakarta
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-10 mb-5 text-center'>
            <h2 className='text-xl text-white mb-3'>Follow Us</h2>
            <div className='flex justify-center items-center text-center'>
              <a href="https://www.instagram.com/beautycat_id/" target='_blank' className='text-white text-center'>
                <FaInstagram size={50} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default page