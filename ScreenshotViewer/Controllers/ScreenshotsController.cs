using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScreenshotViewer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScreenshotsController : ControllerBase
    {

        private readonly ILogger<ScreenshotsController> _logger;
        private readonly ScreenshotsProvider _provider = new ScreenshotsProvider();

        public ScreenshotsController(ILogger<ScreenshotsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Screenhot> Get(string folder)
        {
            return _provider.GetScreenhots(new Folder() { Name = folder });
        }
    }
}
