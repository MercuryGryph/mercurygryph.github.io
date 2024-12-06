package cn.mercury9.website.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

@Composable
fun ThemeProvider(
  isDark: Boolean = isSystemInDarkTheme(),
  content: @Composable () -> Unit
) {
  val colorScheme =
    if (isDark) {
      darkColorScheme()
    } else {
      lightColorScheme()
    }

  MaterialTheme(
    colorScheme = colorScheme,
    content = content
  )
}
