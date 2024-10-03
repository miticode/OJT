import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    faChevronLeft
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogSingle = () => {
    const navigate = useNavigate();

  const handleHome = () => {
    navigate('/home');
  };
  const handleOurBlog = () => {
    navigate('/blog');
  };
  return (
    <div>
        <div className="text-black bg-white">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleOurBlog}>Our Blog /</p>
            <p className="text-[#787878]">Single Blog View</p>
          </div>
          <div
            className="text-black pt-[80px] pr-[12%] text-[14px] flex  items-center text-center cursor-pointer"
            onClick={handleOurBlog}
          >
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <p className="pl-2">Back to Blog</p>
          </div>
        </div>
        <div className="pt-5 pb-3 pl-[11%] text-2xl">
          <h1>Blog Title Here</h1>
        </div>
      </div>
      <div className="flex relative w-[700px] h-auto flex-col ml-[430px] mt-10">
        <div className=''>
        <img
              className=""
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/blog/big_blog.jpg"
              alt="Our Story"
            />
        </div>
        <span className="text-[#686f7a] text-[12px] pt-5">
            109k views • March 10, 2020
          </span>
        <hr className="my-2 w-full border-gray-300 mt-5" />
        <p className='text-[#686f7a] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat maximus pellentesque. Integer sem enim, luctus at nibh at, condimentum sagittis sapien. Sed tempus ipsum erat, sit amet efficitur velit interdum eu. Vestibulum hendrerit id dolor eu scelerisque. Phasellus ex dui, consequat nec feugiat eu, dapibus eget ante. Sed sodales interdum dui, at euismod mi feugiat hendrerit. Suspendisse auctor libero in tempor mollis. Nulla et dolor velit. Aliquam sit amet luctus quam.</p>
        <h2 className='text-black'>Why did you decide to teach on Cursus?</h2>
        <p className='text-[#686f7a] text-[12px]'>Nam a egestas libero, eget eleifend turpis. Sed id ipsum a ipsum aliquam laoreet sit amet sit amet nibh. Proin dapibus, libero sed posuere rhoncus, orci mi cursus enim, at accumsan eros massa lacinia mi. Nunc eget finibus felis, volutpat malesuada sem. Aliquam ac nisl pellentesque, varius neque sit amet, porttitor nunc. Nullam elit tellus, dapibus non eleifend sed, hendrerit eget velit. Aliquam ut felis dictum, tincidunt magna vitae, aliquam massa. In porttitor tristique quam, non dignissim sapien pharetra ultrices. Cras non ante non velit mollis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.</p>
        <p className='text-[#686f7a] text-[12px]'>Etiam lobortis dictum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultricies efficitur dui, suscipit tempus elit condimentum quis. Duis sed vestibulum tortor, eget cursus odio.</p>
        <h2 className='text-black'>Did you have any prior on- or offline teaching experience prior to publishing your first Cursus course?</h2>      
        <p className='text-[#686f7a] text-[12px]'>Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim quis orci aliquam, non cursus urna pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus magna sed elit interdum consequat. Vestibulum eu tortor vel ante feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus. Fusce viverra, lectus egestas tincidunt cursus, tortor sapien convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus bibendum mauris ut iaculis.</p>
        <h2 className='text-black'>What are the most rewarding aspects of teaching on Cursus?</h2>
        <p className='text-[#686f7a] text-[12px]'>Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.</p>
      </div>
    </div>
  )
}

export default BlogSingle