// data = {2, 5, 7, 9, 1}

function LineChart({data}) {
    const width = 2048;
    const height = 1024;
    const min = Math.min(...data);
    const max = Math.max(...data); // Math.max.apply(null, data)

    const deltaX = width / (data.length - 1);
    const deltaY = height / (max - min);

    return ( 
        <>
            <svg viewBox={`0 0 ${width} ${height}`} width = "300" height="200">
                <polyline 
                    stroke="red" strokeWidth="15" fill="none"
                    points={data.map((p, i) => `${i * deltaX} ${height - (p - min) * deltaY}`)}
                >

                </polyline>
            </svg>
        </>
    );
}

export default LineChart;