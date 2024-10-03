import React from "react";
import { Image } from "react-bootstrap";

const Copyright = () => {
  return (
    <div className="mt-20">
      <div className="bg-white relative pb-10">
        <div className="flex ml-36">
          <div className="text-black mt-10">Home / Terms of Use</div>
          <div className=" mt-10 mb-5 absolute right-24 border-2  border-gray-300 w-[230px] h-[40px] bg-white px-4 text-base pt-1 group-focus-within:border-black">
            <input
              type="text"
              placeholder="Search"
              className={`ml-4 focus:outline-none text-sm w-[130xp] mt-1 text-black bg-white placeholder-gray-500 focus:placeholder-black focus:text-black rounded-[5px] `}
            />
            <button type="submit" className="top-1 left-[9px] absolute">
              <Image
                className="max-w-none mt-2"
                src={require("../assets/search.png")}
                width={14}
                height={14}
                alt="Search"
              />
            </button>
          </div>
        </div>
        <div className="text-3xl text-black ml-36 mt-10 font-semibold">
          Terms of Use
        </div>
      </div>
      <div className="mt-10 grid grid-cols-5 ml-36">
        <div className="col-span-1">
          <div className="bg-white w-[280px] h-[400px] text-black text-sm">
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Terms of Use
            </div>
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Privacy Policy
            </div>
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Cookie Policy
            </div>
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Copyright Policy
            </div>
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Cursus API Agreement
            </div>
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Instructor Terms
            </div>
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Credits Program
            </div>
            <div className="bg-white w-[280px] h-[50px] border-[1px] border-[#eaeaea] flex pl-6 items-center">
              Pricing and Promotions Policy
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="italic text-black">
            These Terms of Use <b>("Terms")</b> were last updated on August 1,
            2020
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            volutpat maximus pellentesque. Integer sem enim, luctus at nibh at,
            condimentum sagittis sapien. Sed tempus ipsum erat, sit amet
            efficitur velit interdum eu. Vestibulum hendrerit id dolor eu
            scelerisque. Phasellus ex dui, consequat nec feugiat eu, dapibus
            eget ante. Sed sodales interdum dui, at euismod mi feugiat
            hendrerit. Suspendisse auctor libero in tempor mollis. Nulla et
            dolor velit. Aliquam sit amet luctus quam. Nam a egestas libero,
            eget eleifend turpis. Sed id ipsum a ipsum aliquam laoreet sit amet
            sit amet nibh. Proin dapibus, libero sed posuere rhoncus, orci mi
            cursus enim, at accumsan eros massa lacinia mi. Nunc eget finibus
            felis, volutpat malesuada sem. Aliquam ac nisl pellentesque, varius
            neque sit amet, porttitor nunc. Nullam elit tellus, dapibus non
            eleifend sed, hendrerit eget velit. Aliquam ut felis dictum,
            tincidunt magna vitae, aliquam massa. In porttitor tristique quam,
            non dignissim sapien pharetra ultrices. Cras non ante non velit
            mollis mollis. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Quisque et bibendum
            urna, eget consequat sapien. Integer sed condimentum nibh. Integer
            id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla
            odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim
            quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a
            pretium vel, ultrices porta nisl. Etiam lobortis dictum tincidunt.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Suspendisse ultricies efficitur dui, suscipit tempus elit
            condimentum quis. Duis sed vestibulum tortor, eget cursus odio.
          </div>
          <div className="text-black mt-16 text-xl font-semibold">
            Table of Contents
          </div>
          <ul className="list-decimal space-y-4 mt-4 ml-10 text-black">
            <li className="hover:underline">Accounts</li>
            <li className="hover:underline">
              Course Enrollment and Lifetime Access
            </li>
            <li className="hover:underline">Payments, Credits, and Refunds</li>
            <li className="hover:underline">Content and Behavior Rules</li>
            <li className="hover:underline">
              Cursus’s Rights to Content You Post
            </li>
            <li className="hover:underline">Cursus’s Rights</li>
            <li className="hover:underline">How to Contact Us</li>
          </ul>
          <div className="text-black mt-16 text-xl font-semibold">
            1. Accounts
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
            lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
            pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
            lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia
            enim quis orci aliquam, non cursus urna pellentesque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
            magna sed elit interdum consequat. Vestibulum eu tortor vel ante
            feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
            Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
            convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
            bibendum mauris ut iaculis.
          </div>
          <div className="text-black mt-16 text-xl font-semibold">
            2. Course Enrollment and Lifetime Access
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Quisque et bibendum urna, eget consequat sapien. Integer sed
            condimentum nibh. Integer id neque tristique, lobortis massa ac,
            dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
            velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
            tortor orci, luctus a pretium vel, ultrices porta nisl.
          </div>
          <div className="text-black mt-16 text-xl font-semibold">
            3. Payments, Credits, and Refunds
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
            lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
            pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
            lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia
            enim quis orci aliquam, non cursus urna pellentesque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
            magna sed elit interdum consequat. Vestibulum eu tortor vel ante
            feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
            Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
            convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
            bibendum mauris ut iaculis.
          </div>
          <div className="text-black mt-16 text-xl font-semibold">
            4. Content and Behavior Rules
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Quisque et bibendum urna, eget consequat sapien. Integer sed
            condimentum nibh. Integer id neque tristique, lobortis massa ac,
            dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
            velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
            tortor orci, luctus a pretium vel, ultrices porta nisl.
          </div>
          <div className="text-black mt-16 text-xl font-semibold">
            5. Cursus’s Rights to Content You Post
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
            lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
            pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
            lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia
            enim quis orci aliquam, non cursus urna pellentesque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
            magna sed elit interdum consequat. Vestibulum eu tortor vel ante
            feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
            Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
            convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
            bibendum mauris ut iaculis.
          </div>
          <div className="text-black mt-16 text-xl font-semibold">
            6. Cursus’s Rights
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Quisque et bibendum urna, eget consequat sapien. Integer sed
            condimentum nibh. Integer id neque tristique, lobortis massa ac,
            dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
            velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
            tortor orci, luctus a pretium vel, ultrices porta nisl.
          </div>
          <div className="text-black mt-16 text-xl font-semibold">
            7. How to Contact Us
          </div>
          <div className="mr-36 leading-8 mt-6 text-[#817a89] text-sm">
            Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
            lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
            pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
            lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia
            enim quis orci aliquam, non cursus urna pellentesque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
            magna sed elit interdum consequat. Vestibulum eu tortor vel ante
            feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
            Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
            convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
            bibendum mauris ut iaculis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
