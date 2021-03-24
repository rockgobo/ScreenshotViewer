using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ScreenshotViewer
{
    public class ScreenshotsProvider
    {
        private string _rootDirectory = "./ClientApp/public/Images";

        public List<Folder> GetFolder() {
            List<Folder> folder = new();

            foreach (var name in Directory.GetDirectories(_rootDirectory))
            {
                var count = Directory.GetFiles(name).Count();

                var folderName = name.Replace(_rootDirectory+"\\", "");
                var d = folderName.Split('_')[0];
                var date = d.Split('.');
                var dateGerman = date[2] + '.' + date[1] + '.' + date[0];
                var time = folderName.Split('_')[1];
                time = time.Replace('-', ':');
                folder.Add(new Folder() { Name = folderName, Count = count, Date = dateGerman, Time = time});
            }
            return folder;
        }

        public List<Screenhot> GetScreenhots(Folder folder) {
            List<Screenhot> screenshots = new();

            foreach(var filename in Directory.GetFiles(_rootDirectory + '/' + folder.Name))
            {
                var name = filename.Replace(_rootDirectory + '/' + folder.Name + "\\", "");
                var pageName = filename.Split('.')[0];
                screenshots.Add(new Screenhot() { PageName = pageName, FileName = name });
            }
            return screenshots;
        }
    }
}
