import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const whyChooseUsItems = [
    {
      title: "Industry Experience",
      description:
        "With over X years of experience, we have successfully served clients across various industries, including manufacturing, automotive, aerospace, and consumer goods.",
    },
    {
      title: "Customized Solutions",
      description:
        "We develop customized PLM solutions that align with your specific needs, goals, and processes.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest PLM software and tools to empower our clients with advanced capabilities, such as product data management, collaboration platforms, and digital twin technology.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our track record of successful PLM implementations and satisfied clients speaks for itself.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team of PLM experts is committed to providing ongoing support, training, and maintenance to ensure that our clients derive maximum value from their PLM investments.",
    },
  ];

  return (
    <section>
      <h2>Why Choose Us</h2>
      <div className="row">
        {whyChooseUsItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="col mx-1"
          >
            <h5 className="text-center">
              <strong>{item.title}</strong>
            </h5>
            <p className="text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
