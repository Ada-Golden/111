// components/FloorPlan/FloorPlan.jsx
import { useD3 } from '../../../hooks/useD3';
import * as d3 from 'd3';

export default function FloorPlan({ rooms }) {
  const ref = useD3((svg) => {
    // D3.js 绘制楼层平面图
    const cellSize = 50;
    
    svg.selectAll(".room")
      .data(rooms)
      .enter()
      .append("rect")
      .attr("x", d => d.x * cellSize)
      .attr("y", d => d.y * cellSize)
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("fill", d => d.status === 'VACANT' ? '#4CAF50' : '#F44336');
  });

  return <svg ref={ref} />;
}