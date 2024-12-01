import { Model } from "./modal";
import { useState, useRef } from "react";
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import emailjs from '@emailjs/browser';
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open2, setOpen2] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vltajht', 'template_7zn9zj3', form.current, 'Y0BqIcDnA31E355qj')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex space-x-64 -mt-8 py-4">
      {/* Skills Section */}
      <div className="font-mono">
        <button onClick={() => setOpen(true)} className="transition-colors duration-300 hover:text-[#00E4F2]" >Skills</button>
        <Model open={open} onclose={() => setOpen(false)}>
          <ul>
            <p className="color: text-[#00E4F2]">Top Competitive Websites</p>
            <li className="flex items-center space-x-2">
              <SiLeetcode  style={{ color: '#00EAFE' }}/>
              <a href="https://leetcode.com/u/sakshamgumber124/" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <SiCodechef  style={{ color: '#00EAFE' }}/>
              <a href="https://www.codechef.com/users/sakshamgumber124" target="_blank" rel="noopener noreferrer">
                CodeChef
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <SiCodeforces  style={{ color: '#00EAFE' }}/>
              <a href="https://codeforces.com/profile/sakshamgumber124" target="_blank" rel="noopener noreferrer">
                Codeforces
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <SiGeeksforgeeks  style={{ color: '#00EAFE' }}/>
              <a href="https://auth.geeksforgeeks.org/user/sakshamgumber124" target="_blank" rel="noopener noreferrer" >
                GeeksforGeeks
              </a>
            </li>
          </ul>
        </Model>
      </div>

      {/* Contact Section */}
      <div className="font-mono">
        <button onClick={() => setOpen2(true)} className="transition-colors duration-300 hover:text-[#00E4F2]">Contact</button>
        <Model open={open2} onclose={() => setOpen2(false)}>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex items-center space-x-2">
              <h1 className="text-[#00E4F2]">Name</h1>
              <input
                type="text"
                placeholder="Enter Your Name Please"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ color: "black" }}
                required
              />
            </div>
            <div className="flex items-center space-x-2 text-[#00E4F2]">
              <h1>Email</h1>
              <input
                type="email"
                placeholder="Enter Your Email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ color: "black" }}
              />
            </div>
            <div className="flex items-center space-x-2 text-[#00E4F2]">
              <h1>Message</h1>
              <input
                type="text"
                placeholder="Enter the message you want to send"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ color: "black" }}
                required
              />
            </div>
            <button type="submit" onClick={() => setOpen2(false)}>Submit</button>
          </form>
        </Model>
      </div>
      <div className="transition-colors duration-300 hover:text-[#00E4F2] font-mono" >Project</div>
      <div className="transition-colors duration-300 hover:text-[#00E4F2] font-mono">Competitive Websites</div>
    </div>
  );
};
