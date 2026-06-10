function Agents() {
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
          marginBottom: "20px",
        }}
      >
        Our Agents
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#142e63",
          maxWidth: "900px",
          margin: "0 auto 60px",
          lineHeight: "30px",
          fontSize: "18px",
        }}
      >
        Meet our trusted real estate experts who help clients find luxury
        homes, modern apartments, and the best investment properties with
        professional guidance.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* AGENT 1 */}
        <div
          style={{
            width: "300px",
             background: "#f7f6f3",
            border: "1px solid orange",
            borderRadius: "15px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Rahul Sharma</h2>

          <p style={{ color: "#142e63", marginTop: "10px" }}>
            Senior Property Dealer
          </p>

          <p style={{ marginTop: "20px", lineHeight: "28px", color: "#142e63" }}>
            Expert in luxury villas and premium residential properties with 8+
            years of experience.
          </p>
        </div>

        {/* AGENT 2 */}
        <div
          style={{
            width: "300px",
             background: "#f7f6f3",
            border: "1px solid orange",
            borderRadius: "15px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt=""
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Priya Verma</h2>

          <p style={{ color: "#142e63", marginTop: "10px" }}>
            Real Estate Consultant
          </p>

          <p style={{ marginTop: "20px", lineHeight: "28px", color: "#142e63" }}>
            Helping clients find modern apartments and commercial investment
            properties.
          </p>
        </div>

        {/* AGENT 3 */}
        <div
          style={{
            width: "300px",
             background: "#f7f6f3",
            border: "1px solid orange",
            borderRadius: "15px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt=""
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f"  }}>Aman Kapoor</h2>

          <p style={{ color: "#142e63", marginTop: "10px" }}>
            Property Investment Expert
          </p>

          <p style={{ marginTop: "20px", lineHeight: "28px", color: "#142e63" }}>
            Specialised in investment planning and commercial property deals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Agents;