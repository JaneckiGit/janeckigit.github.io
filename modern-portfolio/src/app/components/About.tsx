import { FaUserTie, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaLanguage, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full max-w-4xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl shadow-xl bg-white/90 dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</h2>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaUserTie className="text-xl text-blue-500 dark:text-blue-400" />
            <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">Mateusz Janecki</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <FaMapMarkerAlt className="text-md" /> Kraków, Poland
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            I am a passionate technologist and lifelong learner, always seeking new challenges and opportunities to grow. With a strong background in IT, DevOps, and software development, I thrive in dynamic environments where I can combine my technical skills with creativity and communication. I enjoy working on innovative projects, collaborating with diverse teams, and constantly improving myself.
          </p>
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Interests:</span> Cryptocurrency, digital marketing, self-development, exploring the world, and music.
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Quick summary:</span> I am curious, ambitious, and open-minded. I love learning about new technologies, understanding how things work, and sharing knowledge with others. I believe in continuous self-improvement and enjoy exploring both the digital and real world. Whether it&apos;s coding, traveling, or listening to music, I always bring energy and a positive attitude.
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="mailto:mateuszjanecki04@gmail.com" className="flex items-center gap-2 text-blue-600 hover:underline"><FaEnvelope /> mateuszjanecki04@gmail.com</a>
            <a href="https://www.linkedin.com/in/mateusz-j-621b1a196" target="_blank" className="flex items-center gap-2 text-blue-500 hover:underline"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/janeckigit" target="_blank" className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"><FaGithub /> GitHub</a>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 mt-8 md:mt-0">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2"><FaLanguage className="text-blue-400" /> Languages</h3>
            <ul className="ml-2 text-gray-700 dark:text-gray-300">
              <li><span className="font-bold">Polish</span> - native</li>
              <li><span className="font-bold">English</span> - B2</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2"><FaTools className="text-purple-400" /> Key Skills</h3>
            <ul className="ml-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>DevOps & Cloud: Microsoft Azure, CI/CD, automation, pipelines, virtual machines</li>
              <li>Programming: Python, Bash, JavaScript, HTML, CSS</li>
              <li>Web Development: Modern frameworks, responsive design, UI/UX</li>
              <li>Version Control: Git, GitHub</li>
              <li>Agile & Teamwork: Scrum, project management, communication</li>
              <li>Digital Marketing: SEO, analytics, content creation</li>
              <li>Cryptocurrency: Blockchain basics, trading, security</li>
              <li>Self-development: Fast learner, growth mindset, adaptability</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 