import type { FC, MouseEvent } from 'react';
import React, { useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import Countdown from 'react-countdown';
import * as moment from 'moment';

import LocaleSelect from './LocaleSelect';
import './Navbar.less';

interface INavbarProps {
  location: any;
  navPrefix?: React.ReactNode;
  onMobileMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}
const getInitTime = () => {
  let result = localStorage.getItem("initTime");
  if (!result || moment().isSameOrAfter(moment(new Date(result)))) {
    const initTime = moment().add(1, "hours").format("YYYY/MM/DD HH:mm:ss"); //当前时间的前10天时间
    localStorage.setItem("initTime", initTime);
    return initTime;
  }
  return localStorage.getItem("initTime");
};
const rendererCountDown = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span className="__dumi-default-navbar-logo" style={{
      backgroundImage: 'none',
    }}>已经完成每日复习任务</span>;
  } else {
    // Render a countdown
    return <span className="__dumi-default-navbar-logo" style={{
      backgroundImage: 'none',
    }}>⏰还剩{hours}时{minutes}分{seconds}秒</span>;
  }
}
const Navbar: FC<INavbarProps> = ({ onMobileMenuClick, navPrefix, location }) => {
  const {
    base,
    config: { mode, title, logo },
    nav: navItems,
  } = useContext(context);
  const initTime = getInitTime();
  return (
    <div className="__dumi-default-navbar" data-mode={mode}>
      {/* menu toogle button (only for mobile) */}
      <button className="__dumi-default-navbar-toggle" onClick={onMobileMenuClick} />
      {/* logo & title */}
      {/* <Link
        className="__dumi-default-navbar-logo"
        style={{
          backgroundImage: logo && `url('${logo}')`,
        }}
        to={base}
        data-plaintext={logo === false || undefined}
      >
        {title}
      </Link> */}
      <Countdown
        date={new Date(initTime)}
        renderer={rendererCountDown}></Countdown>
      <nav>
        {navPrefix}
        {/* nav */}
        {navItems.map(nav => {
          const child = Boolean(nav.children?.length) && (
            <ul>
              {nav.children.map(item => (
                <li key={item.path}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          );

          return (
            <span key={nav.title || nav.path}>
              {nav.path ? (
                <NavLink to={nav.path} key={nav.path}>
                  {nav.title}
                </NavLink>
              ) : (
                nav.title
              )}
              {child}
            </span>
          );
        })}
        <LocaleSelect location={location} />
      </nav>
    </div>
  );
};

export default Navbar;
