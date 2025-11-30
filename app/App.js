import { useState } from 'react';
import { css, html } from 'react-strict-dom';

const styles = css.create({ 
    container: { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 20, 
        padding: 40 
    },
    counterDisplay: { 
        fontSize: 32, 
        fontWeight: 'bold', 
        color: '#333' 
    },
    buttonContainer: { 
        display: 'flex', 
        gap: 15 
    },
    button: { 
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#007AFF', 
        borderRadius: 8, 
        color: 'white', 
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 0,
        borderStyle: 'none',
        borderColor: 'transparent',
        cursor: 'pointer'
    },
    minusButton: { 
        backgroundColor: '#FF3B30' 
    },
    plusButton: { 
        backgroundColor: '#34C759' 
    }
});

export default function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <html.div data-layoutconformance="strict" style={styles.container}>
            <html.div style={styles.counterDisplay}>
                <html.span>{count}</html.span>
            </html.div>
            <html.div style={styles.buttonContainer}>
                <html.button 
                    style={[styles.button, styles.minusButton]} 
                    onClick={decrement}
                >
                    <html.span>-</html.span>
                </html.button>
                <html.button 
                    style={[styles.button, styles.plusButton]} 
                    onClick={increment}
                >
                    <html.span>+</html.span>
                </html.button>
            </html.div>
        </html.div>
    );
}