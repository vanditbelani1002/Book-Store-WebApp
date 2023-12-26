import React from 'react'
import Slider from 'react-slick'

function Testimonial() {

    const testimonialData = [
        {
          id: 1,
          name: "Victor",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
        },
        {
          id: 1,
          name: "Satya Narayan",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
        },
        {
          id: 1,
          name: "Sachin Tendulkar",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
        },
      ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
      

  return (
    <div className='py-10'>
      <div className="container">
        {/* header  */}
        <div data-aos='slide-up' className='text-center mb-20 max-w[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    What our Customer says
                </p>
                <h1 className='text-3xl font-bold'>Testimonials</h1>
                <p className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque amet animi, vero reiciendis quod enim!</p>
        </div>

        {/* card section  */}
        <div data-aos='zoom-in'>
            <Slider {...settings}>
                {testimonialData.map((data)=>(
                    <div>
                        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                            <div>
                                <img src={data.img} className='rounded-full w-20 h-20 object-cover' alt="" />
                            </div>
                            <div>
                                <div>
                                    <p className='text-gray-500 text-sm'>{data.text}</p>
                                    <h1 className='font-bold text-black/80 dark:text-white'>{data.name}</h1>
                                </div>
                            </div>
                        <p className='absolute top-0 z-10 text-black/20 right-0 font-serif text-9xl'>,,</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
