import LeftProfile from "../../components/leftProfile";
import ChatDetail from "../../components/chatDetail";


export default function chat () {
    return (
        <div>
              <div className="flex mtjustify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
           
            {/* LeftMenu */}
            <div className="bg-[#1C1B19] min-w-[340px] max-w-[400px] w-100 h-100">
              <LeftProfile />
            </div>

            {/* ChatDetail */}
            <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
              <ChatDetail />
            </div>
          </div>
        </div>
    )
}