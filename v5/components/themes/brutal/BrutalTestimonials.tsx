import { motion } from "framer-motion";
import {
  containerVariants,
  slideLeftVariant,
  slideRightVariant,
  slideUpVariant,
} from "./motionVariants";

export default function BrutalTestimonials() {
  return (
    <motion.section
      id="testimonials"
      className="space-y-4"
      variants={slideUpVariant}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="text-3xl font-black uppercase">Testimonials</h2>
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.article
          className="border-[3px] border-border bg-card p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
          variants={slideLeftVariant}
        >
          <p className="font-semibold text-sm md:text-base mb-4">
            &ldquo;Lucky is an exceptional developer with a very calm spirit. He
            not only developed a professional website for us, but also took the
            pain of training us to use it with and without his supervision. He
            delivered quality service with cost-effective advice.&rdquo;
          </p>
          <p className="font-black uppercase text-sm">
            — Dr. Oladapo David Ifeluwa, Lecturer / Statistician / Data
            Scientist
          </p>
        </motion.article>

        <motion.article
          className="border-[3px] border-border bg-card p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
          variants={slideRightVariant}
        >
          <p className="font-semibold text-sm md:text-base mb-4">
            &ldquo;Victory is a very talented developer who generously shares
            his knowledge with others. He is a very valued member of our
            community, willing and capable of helping others get unstuck. Any
            company that gets ahold of Victory should do its utmost to keep
            him.&rdquo;
          </p>
          <p className="font-black uppercase text-sm">
            — Per Borgen, CEO at Scrimba
          </p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
