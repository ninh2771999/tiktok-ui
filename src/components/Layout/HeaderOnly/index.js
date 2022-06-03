import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="conteainer">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
