package cn.mercury9.website.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import cn.mercury9.utils.compose.string
import mercurygryph_website.composeapp.generated.resources.Res
import mercurygryph_website.composeapp.generated.resources.hello

@Composable
fun MainScreen() {
  Surface(
    modifier = Modifier
      .fillMaxSize()
  ) {
    Column(
      horizontalAlignment = Alignment.CenterHorizontally,
      verticalArrangement = Arrangement.Center,
    ) {
      Text(
        text = Res.string.hello.string,
        style = MaterialTheme.typography.headlineLarge
      )
    }
  }
}
