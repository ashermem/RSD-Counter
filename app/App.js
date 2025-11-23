import { html, css } from 'react-strict-dom';

const styles = css.create({ button: { padding: 10, backgroundColor: 'red', borderRadius: 4, color: 'white' } });

export default function App() {
    return (
        <html.div data-layoutconformance="strict">
            <html.button style={styles.button}>Press me</html.button>
        </html.div>
    );
}