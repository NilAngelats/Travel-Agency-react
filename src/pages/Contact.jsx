const Contact = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
      <p className="text-base-content/70 mb-8">
        Tell us where you want to go, and we will help you plan.
      </p>

      <div className="rounded-2xl border border-base-300 bg-base-100 p-8 shadow-sm">
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full rounded-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full rounded-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="How can we help?"
              className="textarea textarea-bordered w-full h-36 rounded-xl"
            ></textarea>
          </div>

          <button className="btn mt-6 w-full rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-700 border-0">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
