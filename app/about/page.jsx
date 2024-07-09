import Navbar from "@/components/Navbar";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <section className="my-10 text-center">
          <h2 className="text-3xl font-bold mb-6">About us</h2>
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              Introduction To Best Digital Agency!
            </h3>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet...</p>
            <p className="text-lg mb-4">Donec velit orci...</p>
            <div className="flex justify-around mb-10">
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <p className="text-lg">Best Price Guaranteed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-lg">Finance Analysis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <p className="text-lg">Professional Team</p>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Image
                src="/images/team.jpg"
                alt="Team"
                width={200}
                height={150}
              />
              <Image
                src="/images/video.jpg"
                alt="Video"
                width={200}
                height={150}
              />
            </div>
          </div>
        </section>
        <section className="my-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Team Members</h2>
          <div className="flex justify-around flex-wrap">
            <div className="w-48 text-center mb-6">
              <Image
                className="rounded-full"
                src="/images/member1.jpg"
                alt="Sony Madison"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold mt-4">Sony Madison</h3>
              <p className="text-gray-600">CEO, Director</p>
            </div>
            <div className="w-48 text-center mb-6">
              <Image
                className="rounded-full"
                src="/images/member2.jpg"
                alt="Harry Warth"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold mt-4">Harry Warth</h3>
              <p className="text-gray-600">Head Manager</p>
            </div>
            <div className="w-48 text-center mb-6">
              <Image
                className="rounded-full"
                src="/images/member3.jpg"
                alt="Jenny Hobbs"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold mt-4">Jenny Hobbs</h3>
              <p className="text-gray-600">Branch Manager</p>
            </div>
            <div className="w-48 text-center mb-6">
              <Image
                className="rounded-full"
                src="/images/member4.jpg"
                alt="Johny Smith"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold mt-4">Johny Smith</h3>
              <p className="text-gray-600">Supervisor</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
