import ChannelComp from "@/components/ChannelComp";

const ChannelLayout = ({ children}) =>{
    return (
        <>
        <h1>Main Layout</h1>
        <h1>Channel Layout</h1>
        <ChannelComp></ChannelComp>
        {children}
        
        </>
    )
}
export default ChannelLayout;