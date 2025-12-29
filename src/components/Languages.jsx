import { motion } from "framer-motion";

const languages = [
  { name: "English", level: "Professional", strength: 95 },
  { name: "Hindi", level: "Fluent", strength: 90 },
  { name: "Kannada", level: "Native", strength: 100 },
];

export default function Languages() {
  return (
    <section
      id="languages"
      style={{
        marginTop: "6rem",
        marginBottom: "6rem",
      }}
    >
      <h2 style={{ marginBottom: "2rem" }}>Languages</h2>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          maxWidth: "600px",
        }}
      >
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "1.5rem",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <strong>{lang.name}</strong>
              <span style={{ color: "#94a3b8" }}>{lang.level}</span>
            </div>

            {/* Animated proficiency bar */}
            <div
              style={{
                height: "8px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.strength}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #3b82f6, #c084fc)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
