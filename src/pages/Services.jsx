function Services() {
  return (
    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          color: "orange",
          marginBottom: "50px",
        }}
      >
        Our Premium Services
      </h1>
      <p
  style={{
    textAlign: "center",
    color: "#ccc",
    maxWidth: "900px",
    margin: "0 auto 50px",
    lineHeight: "30px",
    fontSize: "18px",
  }}
>
  We provide trusted real estate solutions including luxury property buying,
  selling, rentals, and premium interior design services. Our goal is to help
  clients find modern homes with comfort, style, and the best investment value.
</p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Property Buying</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            We help clients buy luxury villas, apartments, and premium homes
            at the best locations and prices.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Property Selling</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Sell your property quickly with trusted real estate consultation
            and premium marketing support.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Home Rent</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Find rental flats, luxury apartments, and comfortable family homes
            in prime city locations.
          </p>
        </div>

        {/* CARD 4 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Interior Design</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Modern and stylish interior solutions for luxury homes, villas, and
            commercial spaces.
          </p>
        </div>

        {/* CARD 5 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Plumbing</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Reliable plumbing solutions for homes, offices, kitchens,
            bathrooms, and complete water fitting work.
          </p>
        </div>

        {/* CARD 6 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Electrician</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Safe electrical wiring, fittings, lighting setup, repair work, and
            power solutions by skilled electricians.
          </p>
        </div>

        {/* CARD 7 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Flooring</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Premium tiles, marble, wooden flooring, and modern floor finishing
            for residential and commercial spaces.
          </p>
        </div>

        {/* CARD 8 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "orange" }}>Material Supply</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Quality construction material supply including cement, steel,
            bricks, tiles, and finishing materials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
