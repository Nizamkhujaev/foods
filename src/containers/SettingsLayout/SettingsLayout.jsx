import React from 'react'
import { Route, Switch } from 'react-router'
import SettingsProduct from '../SettingsProduct/SettingsProduct'

const SettingsLayout = () => {
    return (
      <div className="settings-layout">
        <Switch>
          <Route Router exact path="/settings">
          Appereance
          </Route>
          <Route Router path="/settings/restaurant">
            restaurant
          </Route>
          <Route Router path="/settings/managment">
            <SettingsProduct />
          </Route>
          <Route Router path="/settings/notification">
            notification
          </Route>
        </Switch>
      </div>
    );
}

export default SettingsLayout
