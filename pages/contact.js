export default function Contact() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <form>
          <input type="text" placeholder="Your Name" className="border p-2 mb-4 w-full" />
          <input type="email" placeholder="Your Email" className="border p-2 mb-4 w-full" />
          <textarea placeholder="Your Message" className="border p-2 mb-4 w-full" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    )
  }
  