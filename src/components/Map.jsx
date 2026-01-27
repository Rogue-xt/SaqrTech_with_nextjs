import React from 'react'

function Map() {
  return (
    <div>
      <div className="w-full h-[450px] grayscale-[0.2]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.992152817491!2d55.46452757544114!3d25.371579477599173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f591406aef377%3A0x5547b567e474cd72!2sAl%20Saqr%20Technologies%20L.L.C!5e0!3m2!1sen!2sae!4v1769080328226!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map