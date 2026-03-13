import ModernLoadingSpinner from './ModernLoadingSpinner';

export default function ChunkLoader({ message }: { message: string }) {
    return (
        <div className='legacy-hub-loader'>
            <div className='loader-background'></div>
            <div className='loader-content'>
                <div className='brand-section'>
                    <div className='brand-text'>
                        <div className='partnership-text'>IN PARTNERSHIP WITH</div>
                        <div className='deriv-logo'>DERIV</div>
                        <div className='powered-by'>POWERED BY</div>
                        <div className='legacy-hub-logo'>LEGACY HUB</div>
                        <div className='tagline'>WHERE LEGACY MEETS YOUR</div>
                        <div className='journey-text'>trading journey</div>
                    </div>
                </div>
                
                <div className='progress-section'>
                    <div className='progress-bar'>
                        <div className='progress-fill'></div>
                    </div>
                    <div className='loading-text'>
                        <span className='loading-icon'>⚡</span>
                        <span>{message || 'LOADING'}</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .legacy-hub-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: #1a1f2e;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    color: white;
                    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }

                .loader-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #1a1f2e 0%, #2d3748 50%, #1a1f2e 100%);
                    opacity: 0.9;
                }

                .loader-background::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
                    animation: backgroundPulse 4s ease-in-out infinite;
                }

                .loader-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3rem;
                }

                .brand-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .partnership-text {
                    font-size: 0.75rem;
                    font-weight: 400;
                    color: #94a3b8;
                    letter-spacing: 2px;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                }

                .deriv-logo {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #22c55e;
                    letter-spacing: 4px;
                    margin-bottom: 1rem;
                    text-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
                }

                .powered-by {
                    font-size: 0.75rem;
                    font-weight: 400;
                    color: #94a3b8;
                    letter-spacing: 2px;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                }

                .legacy-hub-logo {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #ffffff;
                    letter-spacing: 3px;
                    margin-bottom: 1rem;
                    text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
                }

                .tagline {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #e2e8f0;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .journey-text {
                    font-size: 1.25rem;
                    font-weight: 300;
                    color: #22c55e;
                    font-style: italic;
                    margin-top: 0.25rem;
                }

                .progress-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    width: 300px;
                }

                .progress-bar {
                    width: 100%;
                    height: 4px;
                    background: rgba(148, 163, 184, 0.2);
                    border-radius: 2px;
                    overflow: hidden;
                    position: relative;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #22c55e, #3b82f6, #a855f7);
                    border-radius: 2px;
                    animation: progressAnimation 2s ease-in-out infinite;
                    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
                }

                .loading-text {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #94a3b8;
                    letter-spacing: 1px;
                }

                .loading-icon {
                    color: #22c55e;
                    animation: pulse 1.5s ease-in-out infinite;
                }

                @keyframes backgroundPulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }

                @keyframes progressAnimation {
                    0% { width: 0%; }
                    50% { width: 70%; }
                    100% { width: 100%; }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.1); }
                }

                @media (max-width: 768px) {
                    .deriv-logo {
                        font-size: 2rem;
                    }
                    
                    .legacy-hub-logo {
                        font-size: 1.5rem;
                    }
                    
                    .progress-section {
                        width: 250px;
                    }
                }
            `}</style>
        </div>
    );
}
