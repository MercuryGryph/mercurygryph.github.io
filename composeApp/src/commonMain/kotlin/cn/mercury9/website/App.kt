package cn.mercury9.website

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.runtime.Composable
import cn.mercury9.website.data.AppContainer
import cn.mercury9.website.ui.MainScreen
import cn.mercury9.website.ui.theme.ThemeProvider

@Composable
fun App() {
  AppContainer.isSysDarkMode = isSystemInDarkTheme()

  ThemeProvider(AppContainer.isSysDarkMode) {
    MainScreen()
  }
}
