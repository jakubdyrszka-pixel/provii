import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Antigravity - Optymalizacja Google w Abonamencie';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: 'linear-gradient(135deg, #03000a 0%, #1a0b2e 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Glow effect */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, transparent 70%)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '40px',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 'bold',
                            background: 'linear-gradient(90deg, #4f46e5, #9333ea)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: '20px',
                        }}
                    >
                        Antigravity
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            fontWeight: 600,
                            marginBottom: '20px',
                            maxWidth: '900px',
                        }}
                    >
                        Optymalizacja Google w Abonamencie
                    </div>
                    <div
                        style={{
                            fontSize: 28,
                            color: '#9ca3af',
                            maxWidth: '800px',
                        }}
                    >
                        Sprawiamy, że Google częściej poleca Twoją firmę
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
