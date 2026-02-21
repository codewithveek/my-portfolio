import { motion } from "framer-motion";
import { slideUpVariant } from "./motionVariants";

export default function BrutalContact() {
  const socials = [
    {
      label: "Github",
      href: "https://github.com/codewithveek",
    },
    {
      label: "Linkedin",
      href: "https://linkedin.com/in/lucky-victory-success",
    },
    {
      label: "X",
      href: "https://x.com/codewithveek",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="border-[3px] border-border bg-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
      variants={slideUpVariant}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.35 }}
    >
      <h2 className="text-3xl font-black uppercase mb-2">Let&apos;s Build</h2>
      <p className="font-semibold mb-4">
        Open to full-time roles, freelance projects, and open-source
        collaboration.
      </p>
      <motion.a
        href="mailto:hello@veek.me"
        className="inline-block border-[3px] border-border px-4 py-2 font-black uppercase hover:translate-x-[2px] hover:-translate-y-[2px] transition-transform brutal-wipe"
        whileHover={{ x: 3, y: -3 }}
        whileTap={{ x: 1, y: -1 }}
        transition={{ duration: 0.12 }}
      >
        Contact Now
      </motion.a>

      <div className="mt-5 border-t-[3px] border-border pt-4">
        <p className="text-xs font-black uppercase mb-2">Socials</p>
        <div className="flex flex-wrap gap-4 text-sm font-black uppercase">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[3px] underline-offset-4 hover:translate-x-[1px] transition-transform"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
