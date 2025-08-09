import React from "react";
import assets from "../assets/assets";

const Footer = () => {
    return (
        <div className="bg-black text-white ">
            <div className="flex flex-row justify-between px-20 py-10 ">
                <div>
                    <img src={assets.logokit} alt="" />
                    {/* <h1 className='text-white text-2xl font-bold'>Serendale</h1> */}
                </div>
                <div className="grid grid-cols-4  md:grid-cols-4 gap-30 mt-4">
                    <div className="">
                        <p className="mb-9">Product</p>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                {" "}
                                <a href="">Features</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Integration</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Updates</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">FAQ</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-9">Company</p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                {" "}
                                <a href="">About</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Blog</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Careers</a>{" "}
                            </li>
                            <li>
                                <a href="">Manifesto</a>
                            </li>
                            <li>
                                <a href="">Press</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Contract</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-9">Resources</p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                {" "}
                                <a href="">Exaples</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Community</a>
                            </li>
                            <li>
                                <a href="">Guides</a>
                            </li>
                            <li>
                                <a href="">Docs</a>
                            </li>
                            <li>
                                {" "}
                                <a href="">Press</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-9">Legal</p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <a href="">privacy</a>
                            </li>
                            <li>
                                <a href="">Terms</a>
                            </li>
                            <li>
                                <a href="">Security</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
