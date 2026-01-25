import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ isOpen, onClose, serviceType, doctorName }) => {
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    if (!isOpen) return null;

    const handleConfirm = () => {
        if (!date || !time) {
            alert('Please select a date and time.');
            return;
        }

        // 1. Format for Dashboard (Readable)
        const dateObj = new Date(`${date}T${time}`);
        const readableDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const readableTime = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        const dashboardTime = `${readableDate}, ${readableTime}`;

        // 2. Format for Google Calendar (YYYYMMDDTHHmmss)
        // Simple conversion removing special chars for local time usage
        const cleanDate = date.replace(/-/g, '');
        const cleanTime = time.replace(/:/g, '') + '00';

        // Calculate end time (assume 1 hour session)
        let endHour = parseInt(time.split(':')[0]) + 1;
        const endTimeIndex = endHour < 10 ? '0' + endHour : endHour;
        const cleanEndTime = endTimeIndex + time.split(':')[1] + '00';

        const gCalStart = `${cleanDate}T${cleanTime}`;
        const gCalEnd = `${cleanDate}T${cleanEndTime}`;

        const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Session+with+Pameltex:+${serviceType}&details=Consultation+with+${doctorName}&dates=${gCalStart}/${gCalEnd}&add=pameltex@gmail.com`;

        // 3. Open Google Calendar Popup
        const width = 600;
        const height = 700;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        window.open(
            gCalUrl,
            'googleCalendarPopup',
            `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,status=no,resizable=yes`
        );

        // 4. Save to Dashboard
        const mockAppointment = {
            doctor: doctorName,
            time: dashboardTime,
            type: serviceType
        };
        localStorage.setItem('pameltex_appointment', JSON.stringify(mockAppointment));

        // 5. Close and Redirect
        onClose();
        // Give user a moment to see the popup initiate before switching focus
        setTimeout(() => {
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                width: '90%',
                maxWidth: '400px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }} onClick={e => e.stopPropagation()}>
                <h3 style={{ marginTop: 0, color: 'var(--brand-purple)' }}>Schedule Session</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                    Choose a time to sync with your calendar and ours.
                </p>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '13px' }}>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                    />
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '13px' }}>Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={onClose}
                        style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'pointer' }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="btn btn-solid"
                        style={{ flex: 1, padding: '12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '14px' }}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
