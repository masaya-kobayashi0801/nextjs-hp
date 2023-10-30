import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <p className="font-bold">Contact info</p>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/7118.jpg"
            width={60}
            height={60}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">minato city</p>
          <p className="font-bold mt-3">Email</p>
          <p className="text-xs mt-2 text-gray-600">m-kobayashi@onecre.net</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
