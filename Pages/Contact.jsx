export default function Contact() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Contact Us</h2>
      <p>If you have any queries, feel free to reach us:</p>

      <div style={{ margin: "20px 0", padding: "15px", background: "#f9f9f9", borderRadius: "8px" }}>
        <p><strong>Email:</strong> support@mangalmaydigital.org</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Address:</strong> Mangalmay Digital, Ahmedabad, India</p>
      </div>

      <h3>Send us a Message</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            background: "#e63946",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
