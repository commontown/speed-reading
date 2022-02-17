import './styles.scss';
export default function Viewer({ children }) {
  return (
    <div className="ctapp-viewer">
      <main className="content_">
        {children}
      </main>
    </div>
  );
}


