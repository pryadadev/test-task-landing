import "./SocialButtons.css";
import SocialButton from "@components/SocialButtons/SocialButton/SocialButton.jsx";

const SocialButtons = () => {
  const socialMedia = [
    { name: "facebook", href: "#facebook", icon: "icon_fb" },
    { name: "instagram", href: "#instagram", icon: "icon_ig" },
    { name: "twitter", href: "#twitter", icon: "icon_tw" },
    { name: "vk", href: "#vk", icon: "icon_vk" },
    { name: "ok", href: "#ok", icon: "icon_ok" },
  ];

  return (
    <div className="social-buttons">
      {socialMedia.map((item, index) => (
        <SocialButton
          key={index}
          name={item.name}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default SocialButtons;