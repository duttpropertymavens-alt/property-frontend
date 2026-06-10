function About() {
  return (
    <div
      style={{
        background: "#f7f6f3",
        color: "#142e63",
        minHeight: "100vh",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: "#d8b13f",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        About Us
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "35px",
          fontSize: "20px",
          color: "#142e63",
        }}
      >
        Welcome to Dutt Property Mavens — your trusted real estate partner in
        Panipat. We specialize in luxury villas, modern flats, commercial
        spaces, and premium property consultation. Our mission is to provide
        clients with high-quality real estate solutions, modern living spaces,
        and the best investment opportunities.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "60px",
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            width: "300px",
            background: "#f7f6f3",
            padding: "30px",
            borderRadius: "15px",
            border: "1px solid orange",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d8b13f" }}>10+ Years Experience</h2>

          <p style={{ marginTop: "20px", lineHeight: "28px", color: "#142e63" }}>
            We have years of trusted experience in property buying, selling,
            and premium real estate consultation.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            width: "300px",
            background: "#f7f6f3",
            padding: "30px",
            borderRadius: "15px",
            border: "1px solid orange",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d8b13f" }}>Luxury Properties</h2>

          <p style={{ marginTop: "20px", lineHeight: "28px", color: "#142e63" }}>
            We provide luxury villas, modern apartments, and commercial spaces
            with premium quality and locations.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            width: "300px",
            background: "#f7f6f3",
            padding: "30px",
            borderRadius: "15px",
            border: "1px solid orange",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d8b13f" }}>Trusted Support</h2>

          <p style={{ marginTop: "20px", lineHeight: "28px", color: "#142e63" }}>
            Our team helps clients with honest guidance, secure deals, and
            smooth property transactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;