import Layout from "../components/Layout";
import tokushouhouInfo from "../data/tokushouhou_info.json";

const Tokushouhou = () => {
  return (
    <Layout title="tokusho">
      <div className="mt-8 mb-8" style={{ minWidth: "1440px" }}>
        <h2 className="text-4xl mb-8 text-center">特定商取引法に関する情報</h2>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            {Object.entries(tokushouhouInfo).map(([key, value], i) => (
              <div
                key={i}
                className="flex flex-wrap mb-2 border border-gray-300 rounded"
              >
                <div className="w-1/4 p-2 border-r border-gray-300">
                  <div className="h-16 bg-gray-400 flex items-center p-2">{key}</div>
                </div>
                <div className="w-3/4 p-2">
                  <div className="h-16 bg-white grid items-center">
                    {typeof value === "string"
                      ? value
                          .split("\n")
                          .map((line, i) => <p key={i}>{line}</p>)
                      : value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tokushouhou;
