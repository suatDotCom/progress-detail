import { FC, useMemo } from "react";
import "./ProgressDetail.less";
import currentIcon from "../assets/icons/current_icon.svg";

interface ProgressDetailProps {
  max: number;
  current: number;
  predicted: number;
  risk?: number[];
}

const ProgressDetail: FC<ProgressDetailProps> = ({
  max,
  current,
  predicted,
  risk,
}) => {
  const progressRender = useMemo(() => {
    return Array.from({ length: max }, (_, index) => index + 1).map((i) => {
      if (risk?.some((x) => x === i)) {
        return (
          <div className="riskBar hoverDescription" key={i}>
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }

      if (i < current) {
        return (
          <div className="defaultBar hoverDescription" key={i}>
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }

      if (i == current) {
        return (
          <div className="current" key={i}>
            <img src={currentIcon} width={3} alt="" />
            {i}
          </div>
        );
      }

      if (i > current && i < predicted) {
        return (
          <div className="futureBar hoverDescription" key={i}>
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }

      if (i >= predicted) {
        return (
          <div className="predictedBar" key={i}>
            {i}
          </div>
        );
      }
    });
  }, [max]);
  return <div className="progressDetail">{progressRender}</div>;
};

export default ProgressDetail;
