import AdminMenu from "@/components/Admin/AdminMenu";

export default function Admin({ children }){
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-3">
                    <AdminMenu />
                </div>
                <div className="col">
                    { children }
                </div>
            </div>
        </div>
    );
}