import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="mt-8 mb-8" style={{ minWidth: "1440px" }}>
        <h2 className="text-4xl mb-8 text-center">Home</h2>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  サービス名
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">FTAPP</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  サービス内容
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  個人が時間を有効に管理し、生産性を向上させるための時間管理サービスです。ToDo管理と決済機能を組み合わせ、利用者が目標を達成するために時間を最適化する手助けをします。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  取引通貨
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">JPY</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  販売価格
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">¥100</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  交換および返品（返金ポリシー）
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  お客様都合の返品・交換の場合：基本的に返金はお受けしておりません。
                  <br></br>
                  商品に不備がある場合：内容を確認後返金いたします。まずはご連絡ください。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  支払いカード詳細の送信に関するセキュリティ機能とポリシー
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  お客様のクレジットカード情報を保護するために最善の努力を行っています。
                  <br />
                  カード情報は暗号化され、セキュアなサーバーで管理されます。
                  <br />
                  カード情報は一切保存せず、取引完了後に自動的に削除されます。
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center mt-5 mb-5">
          消費者データのプライバシーポリシー
        </h3>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  個人情報の収集範囲と目的
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  当サイトでは、消費者データを円滑に運営するために必要な範囲で収集しています。
                  <br />
                  収集した情報は、サービス提供・問い合わせ対応の目的で利用します。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  統計データの作成 収集するデータの具体例
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  インターネットドメイン名、IPアドレス、閲覧履歴などの情報を自動的に収集します。
                  <br />
                  メールマガジン配信サービスの利用に際しては、メールアドレスや性別、年齢などを登録いただくことがあります。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  利用目的
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  収集した情報は、サービス提供やメール配信のために利用します。
                  <br />
                  ご意見の受付やアンケート回答は、施策立案や資料作成の参考として利用します。安全確保の措置:
                  漏えいや滅失を防止するためのセキュリティ対策を講じます。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  開示・訂正・利用停止の権利
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  個人情報の開示や訂正、利用停止の請求は、個人情報保護法に基づき対応します。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-2 border border-gray-300 rounded">
              <div className="w-1/4 p-2 border-r border-gray-300">
                <div className="h-16 bg-gray-400 flex items-center p-2">
                  適用範囲
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="h-16 bg-white grid items-center">
                  本ポリシーは当サイトに適用されます。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
