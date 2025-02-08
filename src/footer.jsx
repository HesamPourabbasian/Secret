const Footer = () => {
  // Store social media links and images in a constant array
  const socialMediaLinks = [
    { href: "#", src: "/facebook.png", alt: "Facebook" },
    { href: "#", src: "/mark.png", alt: "Twitter" },
    { href: "#", src: "/152.png", alt: "LinkedIn" },
    { href: "#", src: "/discord.png", alt: "Discord" },
    { href: "google.", src: "/Frame 8.png", alt: "Instagram" },
  ];

  return (
    <div className="relative bg-[url('/BG2.png')] bg-cover bg-center sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
        {/* Centered ship-dev */}
        <div className="ship-dev text-center text-white font-bagel">
          <img
            src="/Compound Logo Animation- V02-Orange 1-22 1.png"
            alt="Ship"
            className="mx-auto"
          />
          <h2 className="w-[80%] sm:w-[70%] md:w-[50%] text-[36px] mx-auto">
            Thousands of researchers rely on Compound Bay to source High-Quality
            Chemicals at the Lowest Prices
          </h2>
        </div>

        {/* Social media icons centered under the ship-dev */}
        <div className="social-media flex justify-center space-x-4">
          {socialMediaLinks.map((social, index) => (
            <a key={index} href={social.href}>
              <img
                src={social.src}
                alt={social.alt}
                className="w-[60px] h-[40px]"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="w-full h-full relative">
        {/* The image positioned at the top-right */}
        <img
          src="/image 5.png"
          alt=""
          className="absolute top-0 right-0 w-[20%] mr-[5%] p-4"
        />

        {/* Unicorn image positioned at the bottom-left */}
        <img
          src="/unicorn.png"
          alt="Unicorn"
          className="absolute bottom-0 left-0 w-[20%] ml-[5%]"
        />
      </div>
    </div>
  );
};

export default Footer;
