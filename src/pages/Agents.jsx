import ndSharmaImg from './ND sharma.jpeg'
import tarunDuttImg from './Tarun_dutt.jpeg'

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
            src={ndSharmaImg}
            alt=""
           style={{
  width: "160px", /* Thoda sa bada kar diya hai acha dikhne ke liye */
  height: "160px", /* Circle ke liye width aur height hamesha same honi chahiye */
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "top", /* Ye line nayi hai! Ye sar ko frame se baahar nahi jaane degi */
  marginBottom: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)" /* Halka sa 3D shadow premium look ke liye */
}}
          />

          <h2 style={{ color: "#d8b13f" }}>Mr. N.D Sharma</h2>

          <p style={{ color: "#142e63", marginTop: "10px" }}>
            Director, Dutt Property Mavens Pvt. Ltd
          </p>

          <p style={{ marginTop: "20px", lineHeight: "28px", color: "#142e63" }}>
           A proud Veteran of the Indian Air Force turned entrepreneur, Mr. N.D. Sharma brings tactical precision, absolute transparency, and an elite work ethic to the real estate industry. Since incorporating Dutt Property Mavens in October 2018, he has guided the company with a service-first mindset, ensuring that clients navigate the property market with total confidence and security.
          </p>
        </div>

        {/* AGENT 2 - Tarun Dutt */}
        <div
          style={{
            width: "340px",
            background: "#f7f6f3",
            border: "1px solid orange",
            borderRadius: "15px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <img
            src={tarunDuttImg}
            alt="Tarun Dutt"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top",
              marginBottom: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Mr. Tarun Dutt</h2>

          <p style={{ color: "#142e63", marginTop: "10px", fontWeight: "bold" }}>
            Managing Director, Dutt Property Mavens Pvt. Ltd.
          </p>

          <div style={{ marginTop: "20px", textAlign: "left" }}>
            <h4 style={{ color: "#d8b13f", marginBottom: "8px" }}>Managing Director's Vision</h4>
            <p style={{ lineHeight: "28px", color: "#142e63", fontSize: "14px" }}>
              "To redefine the real estate experience by building trust, creating lasting value, and developing spaces that inspire growth for individuals, businesses, and communities. Our vision is to become one of India's most respected real estate companies, recognized for innovation, transparency, customer satisfaction, and sustainable development."
            </p>

            <h4 style={{ color: "#d8b13f", margin: "15px 0 8px" }}>Managing Director's Mission</h4>
            <p style={{ lineHeight: "28px", color: "#142e63", fontSize: "14px" }}>
              "Our mission is to deliver exceptional real estate solutions through integrity, market expertise, and customer-centric service. We are committed to helping clients make informed investment decisions, developing premium residential and commercial projects, and creating long-term wealth through ethical business practices, quality construction, and continuous innovation."
            </p>

            <h4 style={{ color: "#d8b13f", margin: "15px 0 8px" }}>Leadership Message</h4>
            <p style={{ lineHeight: "28px", color: "#142e63", fontSize: "14px", fontStyle: "italic" }}>
              "Real estate is not just about buying and selling properties—it's about building dreams, creating opportunities, and shaping the future. At Dutt Property Mavens Pvt. Ltd., every client relationship is built on trust, transparency, and a commitment to excellence. Our goal is to deliver value that lasts for generations."
            </p>
            <p style={{ color: "#142e63", fontWeight: "bold", marginTop: "10px", fontSize: "14px" }}>
              — Managing Director<br/>Dutt Property Mavens Pvt. Ltd.
            </p>
          </div>
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